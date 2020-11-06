import { Action } from "./types";

const nextActions = [];

const previousActions: Action[] = [
  {
    id: 1,
    name: "Ação 1",
    date: new Date(2020, 5, 1),
    buttonLink: "https://www.instagram.com/p/CFX0OqcFb0Z/",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis sit massa id.",
  },
  {
    id: 2,
    name: "Ação 2",
    date: new Date(2020, 5, 2),
    buttonLink: "https://www.instagram.com/p/CFX0OqcFb0Z/",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis sit massa id.",
  },
  {
    id: 3,
    name: "Ação 3",
    date: new Date(2020, 5, 3),
    buttonLink: "https://www.instagram.com/p/CFX0OqcFb0Z/",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis sit massa id.",
  },
  {
    id: 4,
    name: "Ação 4",
    date: new Date(2020, 5, 4),
    buttonLink: "https://www.instagram.com/p/CFX0OqcFb0Z/",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis sit massa id.",
  },
  {
    id: 5,
    name: "Ação 5",
    date: new Date(2020, 5, 5),
    buttonLink: "https://www.instagram.com/p/CFX0OqcFb0Z/",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis sit massa id.",
  },
];

export const actionsSectionContent = {
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis sit massa id fermentum pellentesque rhoncus. Vestibulum cursus eu sed morbi volutpat. Adipiscing commodo, ac fusce tellus nisi, sapien eget. Interdum et sed ut pellentesque in aliquam gravida leo.",
  title: "Ações",
  nextActions,
  previousActions,
  actionButtonText: "Comparecer",
  noActionsFoundText: "Não há ações no momento, mas nos siga nas redes sociais para mais informaçöes",
  nextActionsSubtitle: "Próximas ações",
  previousActionsSubtitle: "Ações anteriores",
};

export const actionsSectionId = "actions-section";
