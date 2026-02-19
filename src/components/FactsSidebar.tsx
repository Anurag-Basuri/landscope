import { Fact } from "@/data/types";

interface Props {
  facts: Fact[];
}

export default function FactsSidebar({ facts }: Props) {
  return (
    <aside className="facts-sidebar">
      <h3 className="facts-title">Quick Facts</h3>
      <ul className="facts-list">
        {facts.map((fact, i) => (
          <li key={i} className="fact-item">
            <span className="fact-label">{fact.label}</span>
            <span className="fact-value">{fact.value}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
