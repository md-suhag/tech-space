import { useMatch, useResolvedPath, Link } from "react-router-dom";
import { SidebarMenuButton } from "../../ui/sidebar";

export const SidebarNavLink = ({ to, icon: Icon, title }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <SidebarMenuButton
      asChild
      className={`${
        match ? "bg-primary font-semibold text-white" : "text-muted-foreground"
      } hover:text-white hover:bg-primary transition-all duration-300 min-h-14`}
    >
      <Link to={to} className="flex items-center gap-2">
        <Icon />
        <span>{title}</span>
      </Link>
    </SidebarMenuButton>
  );
};
