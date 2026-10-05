# ThinkHome for agents

This document gives AI agents a stable summary of the public content on https://thinkhome.cz.

## What ThinkHome does

ThinkHome s.r.o. provides hardware and network management, cybersecurity and data protection, websites and digital presentation, and AI implementation for companies, schools, and the public sector in the Czech market.

## Primary public pages

- `/` — homepage and company overview
- `/sluzby` — service catalog overview
- `/sluzby/{serviceId}` — individual service detail pages
- `/o-nas` — company background and team
- `/reference` — partners and trust signals
- `/kontakt` — contact and legal information
- `/gdpr` — privacy and GDPR information

## Contact and legal details

- Company: ThinkHome s.r.o.
- Email: info@thinkhome.org
- Phone: +420 728 981 602
- Datová schránka: hujt7i5
- Address: Rytířova 777/3, 143 00 Praha — Kamýk
- IČO: 23893591
- DIČ: CZ23893591
- Bank account: 363677109/0300

## Agent-facing discovery files

- `/.well-known/agent-skills/index.json` — Agent Skills discovery index
- `/agent-services.md` — markdown summary of the public service catalog
- `/sitemap.xml` — public URL inventory
- `/robots.txt` — crawler policy

## Unsupported capabilities

ThinkHome.cz is currently a public marketing website and static SPA. It does **not** currently publish:

- a public API catalog
- OpenAPI or Swagger specifications
- OAuth or OpenID Connect discovery metadata
- OAuth protected resource metadata
- a public MCP server endpoint

The site also does not currently offer same-URL HTML-to-markdown negotiation for every route. This markdown file is a dedicated agent-readable summary instead.
