import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

interface Props {
  children: React.ReactNode;
}

function Layout(props: Props) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
