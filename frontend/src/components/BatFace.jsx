function BatFace({ className, face }) {
  return <img className={`m-1 ${className}`} src={face.src} alt={face.alt} />;
}

export default BatFace;
