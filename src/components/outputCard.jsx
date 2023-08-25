export default function OutputCard({ title, className, info }) {
  return (
    <div className={`output-card ${className}`}>
      {info.length > 0 && <Header title={title} />}
      {info.map((i) => (
        <div className="output-content-container" key={i.id}>
          <LeftSideContainer info={i} />
          {i.details && <BulletPoints info={i} />}
          <RightSideContainer info={i} />
        </div>
      ))}
    </div>
  );
}

function Header({ title = "" }) {
  return title && <h3 className="output-card-title">{title}</h3>;
}

function LeftSideContainer({ info }) {
  return (
    <div className="left-side-content-container">
      <BoldParagraph>{info.name}</BoldParagraph>
      <ItalicParagraph>{info.degree ?? info.jobTitle}</ItalicParagraph>
    </div>
  );
}

function RightSideContainer({ info }) {
  const fullDate = `${info.startDate ?? ""} - ${info.endDate ?? ""}`;
  return (
    <div className="right-side-content-container">
      <BoldParagraph>{info.startDate && fullDate}</BoldParagraph>
      <ItalicParagraph>{info.location ?? info.technologies}</ItalicParagraph>
    </div>
  );
}

function BoldParagraph({ children }) {
  return <p className="text-bold">{children}</p>;
}

function ItalicParagraph({ children }) {
  return <p className="text-italic">{children}</p>;
}

function BulletPoints({ info }) {
  return info.details.map(
    (bulletPoint) =>
      bulletPoint.point && (
        <ul key={bulletPoint.id} className="output-bullet-points">
          <li className="bullet-point">{bulletPoint.point}</li>
        </ul>
      )
  );
}
