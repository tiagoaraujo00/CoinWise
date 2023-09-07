interface PageProps {
  externa?: boolean;
  children: any;
  className?: string;
}

export default function Page(props: PageProps) {
  return <div>{props.children}</div>;
}
