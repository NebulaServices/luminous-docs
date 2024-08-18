interface Props {
  title: string;
  description: string;
}

export function GridItem(props: Props) {
  return (
    <div className="flex flex-col text-left p-9">
      <div className="text-3xl">{props.title}</div>
      <div className="text-md">{props.description}</div>
    </div>
  );
}
