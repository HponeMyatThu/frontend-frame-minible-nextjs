export default function RecentActivityCard() {
  const activities = [
    {
      id: 1,
      date: "Today",
      time: "12:20 pm",
      description:
        "Andrei Coman magna sed porta finibus, risus posted a new article: Forget UX Rowland",
      highlight: "Forget UX Rowland",
    },
    {
      id: 2,
      date: "22 Jul, 2020",
      time: "12:36 pm",
      description: "Andrei Coman posted a new article: Designer Alex",
      highlight: "Designer Alex",
    },
    {
      id: 3,
      date: "18 Jul, 2020",
      time: "07:56 am",
      description:
        "Zack Wetass, sed porta finibus, risus Chris Wallace Commented Developer Moreno",
      highlight: "Developer Moreno",
    },
    {
      id: 4,
      date: "10 Jul, 2020",
      time: "08:42 pm",
      description: "Zack Wetass, Chris combined Commented UX Murphy",
      highlight: "UX Murphy",
    },
    {
      id: 5,
      date: "23 Jun, 2020",
      time: "12:22 am",
      description:
        "Zack Wetass, sed porta finibus, risus Chris Wallace Commented Developer Moreno",
      highlight: "Developer Moreno",
    },
    {
      id: 6,
      date: "20 Jun, 2020",
      time: "09:48 pm",
      description: "Zack Wetass, Chris combined Commented UX Murphy",
      highlight: "UX Murphy",
    },
  ];

  return (
    <div className="card">
      <div className="card-body">
        <div className="float-end">
          <div className="dropdown">
            <a
              className="dropdown-toggle"
              href="#"
              id="recentActivityDropdown"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="text-muted">
                Recent <i className="mdi mdi-chevron-down ms-1"></i>
              </span>
            </a>
            <div
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="recentActivityDropdown"
            >
              <a className="dropdown-item" href="#">
                Recent
              </a>
              <a className="dropdown-item" href="#">
                By Users
              </a>
            </div>
          </div>
        </div>

        <h4 className="card-title mb-4">Recent Activity</h4>

        <ol
          className="activity-feed mb-0 ps-2"
          data-simplebar
          style={{ maxHeight: "339px" }}
        >
          {activities.map((activity) => (
            <li className="feed-item" key={activity.id}>
              <div className="feed-item-list">
                <p className="text-muted mb-1 font-size-13">
                  {activity.date}{" "}
                  <small className="d-inline-block ms-1">{activity.time}</small>
                </p>
                <p className="mb-0">
                  {activity.description.split(activity.highlight)[0]}
                  <span className="text-primary">{activity.highlight}</span>
                  {activity.description.split(activity.highlight)[1]}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
