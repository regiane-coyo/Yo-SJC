import { useEffect, useState } from 'react';
import { Calendar, Clock } from 'lucide-react';

export default function CountdownTimer() {
  const targetDate = new Date('2026-08-19T19:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isActive: true,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isActive: false });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isActive: true });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const units = [
    { label: 'Dias', value: timeLeft.days, color: 'text-gold-150' },
    { label: 'Horas', value: timeLeft.hours, color: 'text-gold-200' },
    { label: 'Minutos', value: timeLeft.minutes, color: 'text-gold-300' },
    { label: 'Segundos', value: timeLeft.seconds, color: 'text-wine-300 animate-pulse' },
  ];

  return (
    <div id="countdown-timer-container" className="relative overflow-hidden bg-gradient-to-br from-wine-950 to-wine-900 border border-gold-500/30 text-white rounded-3xl p-6 md:p-8 shadow-2xl">
      {/* Decorative vector background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full filter blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-wine-500/10 rounded-full filter blur-3xl -ml-32 -mb-32"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-serif text-2xl lg:text-3xl text-white font-semibold">
            Início do Festival
          </h3>
          <p className="text-wine-200 text-sm mt-1 flex items-center gap-2 font-sans">
            <Calendar className="w-4 h-4 text-gold-400" />
            Quarta-feira, 19 de Agosto de 2026 • 19:30h
          </p>
          <p className="text-wine-300 text-xs mt-1 flex items-center gap-2 font-mono">
            <Clock className="w-3.5 h-3.5 text-wine-300" />
            Armazém da Pizza (Fechado Exclusivamente)
          </p>
        </div>

        <div className="grid grid-cols-4 gap-2 sm:gap-4 w-full md:w-auto">
          {units.map((unit) => (
            <div
              key={unit.label}
              id={`countdown-unit-${unit.label.toLowerCase()}`}
              className="flex flex-col items-center justify-center p-3 sm:p-4 min-w-[70px] sm:min-w-[90px] bg-wine-900/60 backdrop-blur-md rounded-2xl border border-wine-800/40 shadow-inner"
            >
              <span className={`text-2xl sm:text-3xl font-bold font-mono tracking-tight ${unit.color}`}>
                {String(unit.value).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-wine-300 font-medium uppercase tracking-widest mt-1">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {!timeLeft.isActive && (
        <div className="absolute inset-0 bg-wine-950/90 backdrop-blur-sm z-35 flex items-center justify-center rounded-3xl text-center p-4">
          <div>
            <h4 className="font-serif text-2xl text-gold-400 font-bold">O Festival Iniciou!</h4>
            <p className="text-white text-sm mt-1">Acompanhe a cobertura ao vivo nas redes oficiais.</p>
          </div>
        </div>
      )}
    </div>
  );
}
