import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";

const HowItWork = () => {
  return (
    <div className="mb-10">
      <div className="mt-20 mb-10 text-5xl font-extrabold">
        <h1>How It Works</h1>
      </div>
      <div className="flex  gap-4 justify-center">
        <div className="card border p-5  w-96 shadow-sm">
          <div>
            <CiDeliveryTruck className="text-4xl ml-5" />
          </div>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
          </div>
        </div>

        <div className="card border p-10  w-96 shadow-sm">
          <div>
            <CiDeliveryTruck className="text-4xl ml-5" />
          </div>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
          </div>
        </div>

        <div className="card border p-10  w-96 shadow-sm">
          <div>
            <CiDeliveryTruck className="text-4xl ml-5" />
          </div>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
          </div>
        </div>

        <div className="card border p-10  w-96 shadow-sm">
          <div>
            <CiDeliveryTruck className="text-4xl ml-5" />
          </div>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
