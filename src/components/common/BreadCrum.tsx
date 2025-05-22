import React from "react";

interface BreadCrumItem {
  label: string;
  href?: string;
}

interface BreadCrumProps {
  title: string;
  items: BreadCrumItem[];
}

const BreadCrum: React.FC<BreadCrumProps> = ({ title, items }) => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="page-title-box d-flex align-items-center justify-content-between">
          <h4 className="mb-0">{title}</h4>

          <div className="page-title-right">
            <ol className="breadcrumb m-0">
              {items.map((item, index) => (
                <li
                  key={index}
                  className={`breadcrumb-item ${
                    index === items.length - 1 ? "active" : ""
                  }`}
                  aria-current={index === items.length - 1 ? "page" : undefined}
                >
                  {item.href && index !== items.length - 1 ? (
                    <a href={item.href}>{item.label}</a>
                  ) : (
                    item.label
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrum;
