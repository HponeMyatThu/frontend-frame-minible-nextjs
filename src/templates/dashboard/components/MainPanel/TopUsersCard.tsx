import Image from "next/image";

export default function TopUsersCard() {
  const users = [
    {
      id: 1,
      name: "Glenn Holden",
      location: "Nevada",
      status: "Cancel",
      statusColor: "bg-soft-danger",
      amount: "$250.00",
      trendingUp: true,
      avatar: "/assets/images/users/avatar-4.jpg",
    },
    {
      id: 2,
      name: "Lolita Hamill",
      location: "Texas",
      status: "Success",
      statusColor: "bg-soft-success",
      amount: "$110.00",
      trendingUp: false,
      avatar: "/assets/images/users/avatar-5.jpg",
    },
    {
      id: 3,
      name: "Robert Mercer",
      location: "California",
      status: "Active",
      statusColor: "bg-soft-info",
      amount: "$420.00",
      trendingUp: true,
      avatar: "/assets/images/users/avatar-6.jpg",
    },
    {
      id: 4,
      name: "Marie Kim",
      location: "Montana",
      status: "Pending",
      statusColor: "bg-soft-warning",
      amount: "$120.00",
      trendingUp: false,
      avatar: "/assets/images/users/avatar-7.jpg",
    },
    {
      id: 5,
      name: "Sonya Henshaw",
      location: "Colorado",
      status: "Active",
      statusColor: "bg-soft-info",
      amount: "$112.00",
      trendingUp: true,
      avatar: "/assets/images/users/avatar-8.jpg",
    },
    {
      id: 6,
      name: "Marie Kim",
      location: "Australia",
      status: "Success",
      statusColor: "bg-soft-success",
      amount: "$120.00",
      trendingUp: false,
      avatar: "/assets/images/users/avatar-2.jpg",
    },
    {
      id: 7,
      name: "Sonya Henshaw",
      location: "India",
      status: "Cancel",
      statusColor: "bg-soft-danger",
      amount: "$112.00",
      trendingUp: true,
      avatar: "/assets/images/users/avatar-1.jpg",
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
              id="topUsersDropdown"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="text-muted">
                All Members <i className="mdi mdi-chevron-down ms-1"></i>
              </span>
            </a>
            <div
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="topUsersDropdown"
            >
              <a className="dropdown-item" href="#">
                Locations
              </a>
              <a className="dropdown-item" href="#">
                Revenue
              </a>
              <a className="dropdown-item" href="#">
                Join Date
              </a>
            </div>
          </div>
        </div>
        <h4 className="card-title mb-4">Top Users</h4>
        <div data-simplebar style={{ maxHeight: "339px" }}>
          <div className="table-responsive">
            <table className="table table-borderless table-centered table-nowrap">
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td style={{ width: "20px" }}>
                      <Image
                        src={user.avatar}
                        alt={user.name}
                        width={32}
                        height={32}
                        className="avatar-xs rounded-circle"
                      />
                    </td>
                    <td>
                      <h6 className="font-size-15 mb-1 fw-normal">
                        {user.name}
                      </h6>
                      <p className="text-muted font-size-13 mb-0">
                        <i className="mdi mdi-map-marker"></i> {user.location}
                      </p>
                    </td>
                    <td>
                      <span
                        className={`badge ${user.statusColor} font-size-12`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="text-muted fw-semibold text-end">
                      <i
                        className={`icon-xs icon me-2 ${
                          user.trendingUp ? "text-success" : "text-danger"
                        }`}
                        data-feather={
                          user.trendingUp ? "trending-up" : "trending-down"
                        }
                      ></i>
                      {user.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
