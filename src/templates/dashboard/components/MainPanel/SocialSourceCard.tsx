export default function SocialSourceCard() {
  const socialSources = [
    {
      id: 1,
      name: "Facebook",
      iconClass: "mdi-facebook",
      sales: 125,
      bgColor: "bg-primary",
      iconColor: "text-white",
      mainText: "Facebook - 125 sales",
      description:
        "Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus tincidunt.",
      link: "#",
    },
    {
      id: 2,
      name: "Twitter",
      iconClass: "mdi-twitter",
      sales: 112,
      bgColor: "bg-info",
      iconColor: "text-white",
    },
    {
      id: 3,
      name: "Instagram",
      iconClass: "mdi-instagram",
      sales: 104,
      bgColor: "bg-pink",
      iconColor: "text-white",
    },
    {
      id: 4,
      name: "Google",
      iconClass: "mdi-google",
      sales: 98,
      bgColor: "bg-danger",
      iconColor: "text-white",
    },
  ];

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title mb-4">Social Source</h4>

        <div className="row">
          <div className="col-md-12">
            <div
              className="d-flex align-items-center bg-primary rounded p-3 mb-3"
              style={{ gap: "10px" }}
            >
              <i className="mdi mdi-facebook font-size-24 text-white"></i>
              <div>
                <h5 className="text-white mb-1">Facebook - 125 sales</h5>
                <p className="text-white-50 mb-0">
                  Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
                  libero venenatis faucibus tincidunt.
                </p>
                <a href="#" className="text-white-50 fw-semibold">
                  View more <i className="mdi mdi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          {socialSources.slice(1).map((source) => (
            <div className="col-6" key={source.id}>
              <div
                className={`${source.bgColor} rounded p-3 mb-3 d-flex align-items-center`}
                style={{ gap: "10px" }}
              >
                <i className={`mdi ${source.iconClass} font-size-24 ${source.iconColor}`}></i>
                <div>
                  <h5 className="text-white mb-1">{`${source.name} - ${source.sales} sales`}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
