import config from '../early-bird/config.json';

export default function ComparazionePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Intestazione */}
      <section className="py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Compara i nostri piani ReBest</h1>
        <p className="text-xl text-gray-600">Scegli la soluzione più adatta alle tue esigenze digitali.</p>
      </section>

      {/* Tabella Comparativa */}
      <div className="max-w-6xl mx-auto px-4 pb-20 overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200 shadow-lg rounded-lg">
          <thead>
            <tr className="bg-gray-50">
              <th className="p-6 text-left border-b border-gray-200">Feature</th>
              <th className="p-6 text-center border-b border-gray-200 bg-blue-50">Early Bird</th>
              <th className="p-6 text-center border-b border-gray-200">Full Price</th>
              <th className="p-6 text-center border-b border-gray-200">Start</th>
            </tr>
          </thead>
          <tbody>
            {config.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="p-4 border-b border-gray-200 font-medium">{item.feature}</td>
                
                {/* Rendering delle 3 colonne con logica Stato/Data */}
                {[item.earlyBird, item.full, item.start].map((plan, i) => (
                  <td key={i} className={`p-4 border-b border-gray-200 text-center ${i === 0 ? 'bg-blue-50/30' : ''}`}>
                    {plan.status === "in_arrivo" ? (
                      <div className="flex flex-col items-center">
                        <span className="text-xs font-bold text-orange-500 uppercase">In Arrivo</span>
                        <span className="text-[10px] text-gray-500">{plan.date}</span>
                      </div>
                    ) : plan.active ? (
                      <span className="text-green-500 text-xl">✔</span>
                    ) : (
                      <span className="text-gray-300 text-xl">✘</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}