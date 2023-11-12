/**
 * Layout Component:
 *
 * This component serves as a basic layout structure for the application,
 * providing a centered container with a specified width and height.
 *
 * Props:
 * - children: The content to be placed in the center of the layout.
 *
 * The outer container uses flex to center its content vertically on the screen,
 * with a background color of 'bg-blue-400'.
 *
 * The inner container is centered both horizontally and vertically using margin auto,
 * and it has a background color of 'bg-slate-50', rounded corners, and a specified width
 * (3/5 of the parent) and height (3/4 of the parent).
 *
 * Inside the inner container, the children are placed in the center of the container
 * with 'text-center' class.
 */
export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-blue-400">
      <div className="m-auto bg-slate-50 rounded-md w-3/5 h-3/4">
        <div className="text-center">{children}</div>
      </div>
    </div>
  );
}
