function OutputCard({ title, info, children }) {
  return (
    <div className={`output-card`}>
      {info.length > 0 && <Header title={title} />}
      {children}
    </div>
  );
}

function GenericOutputCard({ title, info }) {
  return (
    <OutputCard title={title} info={info}>
      {info.map((i) => {
        const fullDate = `${i.startDate ?? ""} - ${i.endDate ?? ""}`;
        return (
          <div className="output-content-container" key={i.id}>
            <GenericOutputContainer className="left">
              <BoldParagraph>{i.name}</BoldParagraph>
              <ItalicParagraph>{i.degree ?? i.jobTitle}</ItalicParagraph>
            </GenericOutputContainer>
            <BulletPoints info={i} />
            <GenericOutputContainer className="right">
              <BoldParagraph>
                {(i.startDate && fullDate) || (i.endDate && fullDate)}
              </BoldParagraph>
              <ItalicParagraph>{i.location ?? i.technologies}</ItalicParagraph>
            </GenericOutputContainer>
          </div>
        );
      })}
    </OutputCard>
  );
}

function Header({ title = "" }) {
  return <h3 className="output-card-title">{title}</h3>;
}

function GenericOutputContainer({ className, children }) {
  return (
    <div className={`${className}-side-content-container`}>{children}</div>
  );
}

function RowOutputContainer({ info, title }) {
  return (
    <div className="skills-section">
      {info && <BoldParagraph>{title}</BoldParagraph>}
      <p>{info}</p>
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

export {
  OutputCard,
  GenericOutputCard,
  GenericOutputContainer,
  RowOutputContainer,
  BoldParagraph,
  ItalicParagraph,
  BulletPoints,
};
