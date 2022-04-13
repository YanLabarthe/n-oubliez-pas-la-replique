function BatFace({ className = "batman", face }) {
  return <img className={className} src={face.src} alt={face.alt} />;
}

export default BatFace;
