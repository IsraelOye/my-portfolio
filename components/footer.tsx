export default function Footer() {
  return (
    <footer>
      <p className="text-center text-xs md:text-sm text-muted-foreground pb-5">
        &copy; {new Date().getFullYear()} Israel Oyedele. All rights reserved.
      </p>
    </footer>
  );
}
