type Props = {
  text?: string;
  bgColor?: string;
  textColor?: string;
};

const Header = ({
  text = 'Feedback UI',
  bgColor = 'rgba(0,0,0,0.4)',
  textColor = '#ff6a95',
}: Props) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyles}>
      <h1 className="container">{text}</h1>
    </header>
  );
};

export default Header;
