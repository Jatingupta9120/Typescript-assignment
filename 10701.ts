const componentOption = {
    button: [
      {
        title: "Button Primary",
        image: "/assets/buttonV1.png",
        variant: "ButtonV1",
      },
      {
        title: "Button Secondary",
        image: "/assets/buttonV2.png",
        variant: "ButtonV2",
      },
      {
        title: "Button Tertiary",
        image: "/assets/buttonV3.png",
        variant: "ButtonV3",
      },
    ],
    header: [
      {
        title: "Header Primary",
        image: "/assets/headerV1.png",
        variant: "HeaderV1",
      },
      {
        title: "Header Secondary",
        image: "/assets/headerV2.png",
        variant: "HeaderV2",
      },
    ],
  };
  
  type ComponentOptions = typeof componentOption;

  type ExtractVariant<T> = T extends { variant: infer U }? U : never;
  
  type ButtonVariants = ExtractVariant<ComponentOptions['button'][number]>;
  type HeaderVariants = ExtractVariant<ComponentOptions['header'][number]>;
  
  
const d: ButtonVariants=[]