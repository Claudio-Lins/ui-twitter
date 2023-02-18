import { Sparkle } from "phosphor-react";
import './Header.css'

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <div className="timeline-header">
      <h4>{title}</h4>
      <Sparkle />
    </div>
  );
}
