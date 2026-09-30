import { useState } from "react";
import tym from "../data/tym.json";

function PersonMark() {
    return (
        <svg className="team-mark" viewBox="0 0 80 80" fill="none" aria-hidden="true">
            <circle cx="40" cy="30" r="12" stroke="currentColor" strokeWidth="1.75" />
            <path d="M18 66c2.8-12 11-18 22-18s19.2 6 22 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
    );
}

function PersonCard({ person }) {
    const [failed, setFailed] = useState(false);
    const showPhoto = Boolean(person.photo) && !failed;

    return (
        <li className="team-card">
            <div className="team-frame">
                {showPhoto ? (
                    <img
                        className="team-photo"
                        src={person.photo}
                        alt=""
                        onError={() => setFailed(true)}
                    />
                ) : (
                    <PersonMark />
                )}
            </div>
            <div className="team-meta">
                <p className="team-name">{person.name}</p>
                <p className="team-role">{person.role}</p>
            </div>
        </li>
    );
}

export default function TeamSection() {
    return (
        <section className="team" aria-labelledby="team-title">
            <h2 id="team-title" className="team-title">Náš tým</h2>
            <p className="team-lead">Lidé, se kterými budete mluvit.</p>

            <ul className="team-grid">
                {tym.map((person) => (
                    <PersonCard key={person.id} person={person} />
                ))}
            </ul>

            <style>{`
                .team {
                    margin-top: clamp(4rem, 8vw, 7rem);
                    padding-top: clamp(2.5rem, 5vw, 4rem);
                    border-top: 1px solid rgba(21,51,232,0.1);
                }

                .team-title {
                    margin: 0;
                    font-size: clamp(1.6rem, 2.6vw, 2rem);
                    font-weight: 700;
                    letter-spacing: -0.03em;
                    line-height: 1.15;
                    color: #1533e8;
                }

                .team-lead {
                    margin: 0.45rem 0 clamp(1.5rem, 3vw, 2rem);
                    font-size: 1rem;
                    font-weight: 400;
                    line-height: 1.5;
                    color: rgba(21,51,232,0.65);
                }

                .team-grid {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    width: min(100%, 56rem);
                    margin-inline: auto;
                    border-top: 1px solid rgba(21,51,232,0.12);
                    border-left: 1px solid rgba(21,51,232,0.12);
                }

                .team-card {
                    min-width: 0;
                    border-right: 1px solid rgba(21,51,232,0.12);
                    border-bottom: 1px solid rgba(21,51,232,0.12);
                    background: #fff;
                }

                .team-frame {
                    aspect-ratio: 3 / 2;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(21,51,232,0.04);
                    overflow: hidden;
                }

                .team-mark {
                    width: 22%;
                    height: auto;
                    color: rgba(21,51,232,0.35);
                }

                .team-photo {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }

                .team-meta {
                    padding: 0.85rem 1rem 1rem;
                }

                .team-name {
                    margin: 0;
                    font-size: 1rem;
                    font-weight: 600;
                    letter-spacing: -0.01em;
                    line-height: 1.35;
                    color: #1533e8;
                }

                .team-role {
                    margin: 0.15rem 0 0;
                    font-size: 0.95rem;
                    font-weight: 400;
                    letter-spacing: 0;
                    line-height: 1.4;
                    color: rgba(21,51,232,0.65);
                }

                @media (max-width: 760px) {
                    .team-grid {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                        width: 100%;
                    }
                }
            `}</style>
        </section>
    );
}
