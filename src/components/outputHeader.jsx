export default function OutputHeader({ generalInformation }) {
  return (
    <div
      className={
        (generalInformation[0]?.firstName && "output-header") ||
        (generalInformation[0]?.lastName && "output-header")
      }
    >
      <HeaderTitle generalInformation={generalInformation} />
      <HeaderContent generalInformation={generalInformation} />
      <Links generalInformation={generalInformation} />
    </div>
  );
}

function HeaderTitle({ generalInformation }) {
  return generalInformation.map((item) => (
    <h1 key={item.firstName}>{`${item.firstName ?? ""} ${
      item.lastName ?? ""
    }`}</h1>
  ));
}

function HeaderContent({ generalInformation }) {
  return generalInformation.map((item) => (
    <div key={item.id} className="header-general-content">
      <p>{item.email}</p>
      <p>{item.phoneNumber}</p>
      <p>{item.location}</p>
    </div>
  ));
}

function Links({ generalInformation }) {
  return generalInformation.map((item) => (
    <div className="header-links" key={"links"}>
      {item.linkedin && <p>{item.linkedin}</p>}
      <p>{item.github}</p>
    </div>
  ));
}
