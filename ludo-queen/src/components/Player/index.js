const Player = ({name}) => {
  return <p key={name} >{`Player ${name} joined`}</p>;
}

export default Player;