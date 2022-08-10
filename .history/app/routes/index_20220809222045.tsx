import { useState } from "react"

interface CardInfo {
  nameOnCard: string
  cardNumber: string
  expiry: string
  cvv: number | undefined
}

export default function Index() {

  const [cardInfo, setCardInfo] = useState<CardInfo>({
    nameOnCard: '',
    cardNumber: '',
    expiry: '',
    cvv: undefined
  })
  return (
    <div className="p-8 bg-black">
      <div className="flex items-center justify-center h-screen max-w-2xl mx-auto text-white border border-gray-100 shadow-lg rounded-xl">
        <form action="" className="max-w-md px-4 mx-auto space-y-4">
          <section className="w-full h-64 p-8 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-green-500">
            <div className="w-full h-full p-8 text-white bg-white border border-white shadow-xl rounded-xl bg-opacity-30">
              <div className="w-3/4 space-y-2">
                <h3 className="h-20">Name</h3>
                <div className="flex items-center justify-between">
                  <div>{cardInfo.nameOnCard}</div>
                  <div>{cardInfo.expiry}</div>
                </div>
                <div className="flex justify-between">
                  <span>7777</span>
                  <span>7777</span>
                  <span>7777</span>
                  <span>7777</span>
                </div>
              </div>
            </div>
          </section>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Update payment method</h3>
            <p className="font-light text-gray-500">Update your card details.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="flex flex-col col-span-2">
              <label className="font-semibold track" htmlFor=""> Name on card </label>
              <input value={cardInfo.nameOnCard}
                onChange={(e) => {
                  setCardInfo((current: any) => ({
                    ...current,
                    nameOnCard: String(e.target.value)
                  }))
                }}
                className="p-2 bg-black border border-gray-400 rounded-md" type="text" />
            </div>
            <div className="flex flex-col col-span-full sm:col-span-1">
              <label className="font-semibold track" htmlFor=""> Expiry </label>
              <input value={cardInfo.expiry}
                onChange={(e) => {
                  setCardInfo((current: any) => ({
                    ...current,
                    expiry: String(e.target.value)
                  }))
                }}
                className="p-2 bg-black border border-gray-400 rounded-md" type="text" />
            </div>
            <div className="flex flex-col col-span-2">
              <label className="font-semibold track" htmlFor=""> Card Number </label>
              <input value={cardInfo.cardNumber}
                onChange={(e) => {
                  setCardInfo((current: any) => ({
                    ...current,
                    cardNumber: Number(e.target.value)
                  }))
                }}
                className="p-2 bg-black border border-gray-400 rounded-md" type="text" />
            </div>
            <div className="flex flex-col col-span-full sm:col-span-1">
              <label className="font-semibold track" htmlFor=""> CVV </label>
              <input value={cardInfo.cvv}
                onChange={(e) => {
                  setCardInfo((current: any) => ({
                    ...current,
                    cvv: String(e.target.value)
                  }))
                }}
                type='password'
                className="p-2 bg-black border border-gray-400 rounded-md" type="text" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <button className="py-2 border border-gray-400 rounded-md">Cancel</button>
            <button className="py-2 text-white bg-purple-500 border border-gray-400 rounded-md">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
