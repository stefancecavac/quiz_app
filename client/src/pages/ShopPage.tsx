import { usePurchaseHeart } from "../api/ShopApi";
import { CurrencyIcon } from "../components/ui/icons/CurrencyIcon";
import { LifeIcon } from "../components/ui/icons/LifeIcon";

export const ShopPage = () => {
  const { purchaseHeart } = usePurchaseHeart();

  return (
    <div className="flex flex-col mx-20">
      <h2 className="text-4xl font-medium text-base-content">Shop</h2>
      <div className="flex flex-col gap-3 mt-10">
        <button
          onClick={() => purchaseHeart()}
          className=" p-5 hover:cursor-pointer hover:scale-101 transition-all  items-center rounded-lg flex justify-between border border-transparent hover:border-base-content/20"
        >
          <div className="flex items-center gap-5">
            <div className="size-10">
              <LifeIcon />
            </div>
            <div className="flex flex-col  items-start">
              <p className="text-base-content font-medium text-xl">Extra life</p>
              <p className="text-base-content/50 font-medium ">Continue quizzing</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <p className="font-medium text-xl text-secondary flex items-center gap-3">
              200
              <div className="size-6">
                <CurrencyIcon />
              </div>
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};
