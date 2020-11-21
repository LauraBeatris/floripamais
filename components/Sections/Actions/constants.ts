import { addDays, subDays } from "date-fns";

const now = Date.now();

const actions = [
  {
    id: "1",
    name: "Ação 4",
    date: addDays(now, 1),
    actionLink: "https://www.instagram.com/p/CFX0OqcFb0Z/",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis sit massa id.",
  },
  {
    id: "2",
    name: "Ação 5",
    date: addDays(now, 2),
    actionLink: "https://www.instagram.com/p/CFX0OqcFb0Z/",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis sit massa id.",
  },
  {
    id: "3",
    name: "Ação 6",
    date: addDays(now, 3),
    actionLink: "https://www.instagram.com/p/CFX0OqcFb0Z/",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis sit massa id.",
  },
  {
    id: "4",
    name: "Ação 1",
    date: subDays(now, 3),
    actionLink: "https://www.instagram.com/p/CFX0OqcFb0Z/",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis sit massa id.",
  },
  {
    id: "5",
    name: "Ação 2",
    date: subDays(now, 2),
    actionLink: "https://www.instagram.com/p/CFX0OqcFb0Z/",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis sit massa id.",
  },
  {
    id: "6",
    name: "Ação 3",
    date: subDays(now, 1),
    actionLink: "https://www.instagram.com/p/CFX0OqcFb0Z/",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis sit massa id.",
  },
];

export const actionsSectionFixtures = {
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis sit massa id fermentum pellentesque rhoncus. Vestibulum cursus eu sed morbi volutpat. Adipiscing commodo, ac fusce tellus nisi, sapien eget. Interdum et sed ut pellentesque in aliquam gravida leo.",
  title: "Ações",
  actions,
  actionButtonText: "Comparecer",
  noActionsFoundText: "Não há ações no momento, mas nos siga nas redes sociais para mais informaçöes",
  nextActionsSubtitle: "Próximas ações",
  previousActionsSubtitle: "Ações anteriores",
};

export const actionsSectionId = "actions-section";
