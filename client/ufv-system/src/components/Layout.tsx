import { ReactNode } from "react";
import { Flex } from "../../styles/layoutStyle";

type LayoutProps = {
  children: ReactNode;
}

export default function Layout({children}: LayoutProps){
  return(
    <>
      <Flex>
        {children}
      </Flex>
    </>
  );
}