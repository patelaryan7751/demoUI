import React from "react";
const UtilDataProdStats = () => {
  const utilDataProdStats = [
    {
      id: 1,
      name: "Policyholder Data",
      href: "/summary/policyholder-data",
    },
    {
      id: 2,
      name: "Finanacial Data",
      href: "#",
    },
    {
      id: 3,
      name: "Misclaneous Data",
      href: "#",
    },
  ];

  return (
    <>
      <h3 className="text-base font-semibold leading-6 text-gray-900">
        Top Utilized Data Products
      </h3>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {utilDataProdStats.map((item) => (
          <a
            href={item.href}
            key={item.id}
            className="relative overflow-hidden rounded-lg bg-white shadow px-6 py-6"
          >
            <dt>
              {/* <div className="absolute rounded-md bg-indigo-500 p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div> */}
              <p className="truncate text-2xl font-medium text-black">
                {item.name}
              </p>
            </dt>
          </a>
        ))}
      </dl>
    </>
  );
};
export default UtilDataProdStats;
