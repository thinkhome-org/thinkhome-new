import { useEffect } from 'react';

const ROUTES = {
    home: '/',
    services: '/sluzby',
    about: '/o-nas',
    contact: '/kontakt',
    gdpr: '/gdpr',
};

const CONTACT_DETAILS = {
    companyName: 'ThinkHome s.r.o.',
    email: 'info@thinkhome.org',
    phone: '+420 222 160 782',
    phoneHref: 'tel:+420222160782',
    dataBox: 'hujt7i5',
    address: 'Rytířova 777/3, 143 00 Praha — Kamýk',
    companyId: '23893591',
    vatId: 'CZ23893591',
    bankAccount: '363677109/0300',
    registryNote: 'Spisová značka C 434666 vedená u Městského soudu v Praze',
};

function createTools({ navigate, services }) {
    const serviceSummaries = services.map(({ id, title, subtitle, description }) => ({
        id,
        title,
        subtitle,
        description,
        path: `/sluzby/${id}`,
    }));
    const serviceIds = serviceSummaries.map(({ id }) => id);

    return [
        {
            name: 'navigate_site',
            description: 'Navigate to a public page on thinkhome.cz.',
            inputSchema: {
                type: 'object',
                properties: {
                    page: {
                        type: 'string',
                        enum: [...Object.keys(ROUTES), 'service-detail'],
                    },
                    serviceId: {
                        type: 'string',
                        enum: serviceIds,
                    },
                },
                required: ['page'],
                additionalProperties: false,
            },
            execute: async ({ page, serviceId } = {}) => {
                if (page === 'service-detail') {
                    if (!serviceId || !serviceIds.includes(serviceId)) {
                        throw new Error('A valid serviceId is required for page="service-detail".');
                    }

                    const path = `/sluzby/${serviceId}`;
                    navigate(path);

                    return {
                        ok: true,
                        path,
                        url: new URL(path, window.location.origin).toString(),
                    };
                }

                const path = ROUTES[page];

                if (!path) {
                    throw new Error(`Unsupported page: ${page}`);
                }

                navigate(path);

                return {
                    ok: true,
                    path,
                    url: new URL(path, window.location.origin).toString(),
                };
            },
        },
        {
            name: 'list_services',
            description: 'Return the public ThinkHome service catalog with route paths.',
            inputSchema: {
                type: 'object',
                properties: {},
                additionalProperties: false,
            },
            execute: async () => ({
                services: serviceSummaries,
            }),
        },
        {
            name: 'get_contact_details',
            description: 'Return public ThinkHome contact and legal details.',
            inputSchema: {
                type: 'object',
                properties: {},
                additionalProperties: false,
            },
            execute: async () => CONTACT_DETAILS,
        },
    ];
}

export default function WebMcpBridge({ navigate, services }) {
    useEffect(() => {
        if (typeof navigator === 'undefined') {
            return undefined;
        }

        const modelContext = navigator.modelContext;

        if (!modelContext) {
            return undefined;
        }

        const tools = createTools({ navigate, services });

        if (typeof modelContext.provideContext === 'function') {
            try {
                modelContext.provideContext({ tools });
            } catch (error) {
                console.warn('WebMCP provideContext registration failed.', error);
            }

            return undefined;
        }

        if (typeof modelContext.registerTool === 'function') {
            const controller = new AbortController();

            try {
                tools.forEach(({ execute, ...tool }) => {
                    modelContext.registerTool(
                        {
                            ...tool,
                            execute,
                        },
                        { signal: controller.signal }
                    );
                });
            } catch (error) {
                console.warn('WebMCP registerTool registration failed.', error);
            }

            return () => controller.abort();
        }

        return undefined;
    }, [navigate, services]);

    return null;
}
