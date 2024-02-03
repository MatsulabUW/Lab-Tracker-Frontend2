import ItemCard from "../components/ItemCard";

type Supply = {
  SupplyID: number;
  type: "supply";
  InformalDescription: string;
  ImageURL: string;
  ExpireDate: string;
  NumberInStock: number;
};

type Props = {
  supplies?: Supply[] | null; // 물음표 = optional하다.
};

export default function SuppliesContent({ supplies }: Props) {
  if (!supplies) {
    return null;
  }

  return (
    <>
      {supplies.map((supply) => (
        <ItemCard
          key={supply.SupplyID}
          id={supply.SupplyID}
          type="supplies"
          name={supply.InformalDescription}
          image={supply.ImageURL}
          expire={new Date(supply.ExpireDate)}
          stock={supply.NumberInStock}
        />
      ))}
    </>
  );
}
