"use client";
import { useAuthContext } from "@/app/provider";
import { CircleDollarSign } from "lucide-react";
import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { toast } from "react-toastify";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

export const creditsPlans = [
  { credits: 10, cost: 1 },
  { credits: 50, cost: 5 },
  { credits: 100, cost: 9 },
  { credits: 200, cost: 15 },
];

function Billing() {
  const { user, setUser } = useAuthContext();
  const UpdateUserCredits = useMutation(api.users.UpdateUserCredits);

  const onPaymentSuccess = async (cost, credits) => {
    const result = await UpdateUserCredits({
      uid: user?._id,
      credits: Number(user?.credits) + Number(credits),
    });
    console.log(result);
    setUser((prev) => ({
      ...prev,
      credits: Number(user?.credits) + Number(credits),
    })); // Update user credits in context
    toast("Credits added successfully");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-200 border rounded-xl">
      <h2 className="font-semibold text-3xl mb-6">Credits</h2>
      <div
        className="p-5 border rounded-lg flex justify-between items-center shadow-sm"
        style={{ backgroundColor: "#151515" }}
      >
        <div>
          <h2 className="font-semibold text-lg">Total Credits Left</h2>
          <p className="text-sm text-gray-400">1 Credit = 1 Video</p>
        </div>
        <h2 className="font-bold text-2xl text-white">
          {user?.credits} Credits
        </h2>
      </div>

      <p className="text-sm mt-6 text-gray-400">
        When your credit balance reaches 0, your video generation will stop
        working. Add Credits balance topped up.
      </p>

      <div className="mt-6">
        <h2 className="font-semibold text-2xl">Buy More Credits</h2>
        <div className="mt-4 space-y-4">
          {creditsPlans.map((plan, index) => (
            <div
              key={index}
              className="p-5 border rounded-lg shadow-sm flex justify-between items-center"
              style={{ backgroundColor: "#151515" }}
            >
              <div className="flex items-center gap-3">
                <CircleDollarSign className="text-blue-500" />
                <strong className="text-lg">{plan.credits} Credits</strong>
              </div>
              <div className="flex items-center gap-3">
                <h2 className="font-medium text-lg">${plan.cost}</h2>
                <PayPalButtons
                  className="rounded-xl"
                  style={{
                    layout: "horizontal",
                    color: "white",
                    label: "pay",
                    height: 40,
                  }}
                  onApprove={() => onPaymentSuccess(plan?.cost, plan?.credits)}
                  onCancel={() => {
                    console.log("Payment cancelled");
                    toast.error("Payment cancelled");
                  }}
                  createOrder={(data, actions) => {
                    return actions?.order?.create({
                      purchase_units: [
                        {
                          amount: {
                            value: plan.cost,
                            currency_code: "USD",
                          },
                        },
                      ],
                    });
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Billing;