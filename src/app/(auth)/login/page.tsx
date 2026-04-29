import RegisterForm from "../register/RegisterForm";
import LoginForm from "./LoginForm";


export default function page() {
  return (
    <>
     <div className="min-h-0.5 flex items-center justify-center relative overflow-hidden"
  style={{ background: "linear-gradient(135deg, #d1d5db 0%, #e5e7eb 50%, #f3f4f6 100%)" }}
>
  {/* الكيرف الأبيض */}
  <svg
    className="absolute top-0 right-0 w-full h-full pointer-events-none"
    viewBox="0 0 680 400"
    preserveAspectRatio="xMidYMid slice"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M680,400 L680,180 Q580,260 480,200 Q380,140 300,220 Q200,310 100,280 Q40,260 0,300 L0,400 Z"
      fill="white" opacity="0.55"
    />
    <path
      d="M680,400 L680,280 Q600,310 500,280 Q380,240 260,320 Q160,380 0,360 L0,400 Z"
      fill="white" opacity="0.85"
    />
  </svg>
      <div className="w-full max-w-2xl ">
      
       <LoginForm/>
      </div>
    </div>
    </>
  )
}
