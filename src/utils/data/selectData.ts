export interface SelectData {
  value: string;
  label: string;
}

export const selectLimit: SelectData[] = [
  {
    value: "5",
    label: "Limit: 5",
  },
  {
    value: "10",
    label: "Limit: 10",
  },
  {
    value: "15",
    label: "Limit: 15",
  },
  {
    value: "20",
    label: "Limit: 20",
  },
];

export const selectOrder: SelectData[] = [
  {
    value: "RANDOM",
    label: "Random",
  },
  {
    value: "DESC",
    label: "Desc",
  },
  {
    value: "ASC",
    label: "Asc",
  },
];

export const selectType: SelectData[] = [
  {
    value: "",
    label: "All",
  },
  {
    value: "jpg,png",
    label: "Static",
  },
  {
    value: "gif",
    label: "Animated",
  },
];

export const selectLimitGallery: SelectData[] = [
  {
    value: "5",
    label: "5 items per page",
  },
  {
    value: "10",
    label: "10 items per page",
  },
  {
    value: "15",
    label: "15 items per page",
  },
  {
    value: "20",
    label: "20 items per page",
  },
];
