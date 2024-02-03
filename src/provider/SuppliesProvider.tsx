// context = collection of state
// provider = provides context

import { createContext } from "react";

type SuppliesContextType = {
  search: string;
  setSearch: (query: string) => void;
  category: { label: string; value: string };
  setCategory: (category: { label: string; value: string }) => void;
  status: ("expired" | "out-of-stock" | "need-to-order")[];
  toggleStatus: (status: "expired" | "out-of-stock" | "need-to-order") => void;
  before: string;
  setBefore: (before: string) => void;
  after: string;
  setAfter: (after: string) => void;
};

const SuppliesContext = createContext<SuppliesContextType>({
  search: "",
  setSearch: () => {},
  category: { label: "All", value: "All" },
  setCategory: () => {},
  status: [],
  toggleStatus: () => {},
  before: "",
  setBefore: () => {},
  after: "",
  setAfter: () => {},
});

export default SuppliesContext;
