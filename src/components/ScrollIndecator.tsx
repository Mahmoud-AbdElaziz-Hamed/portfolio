export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="w-8 h-12 rounded-full border-2 border-blue-600 flex items-center justify-center">
        <div className="w-1 h-3 bg-blue-600 rounded-full animate-scroll" />
      </div>
    </div>
  );
}
