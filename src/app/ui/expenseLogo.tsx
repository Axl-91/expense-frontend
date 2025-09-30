import Image from "next/image"

function ExpenseLogo() {
  return (
    <div
      className={'flex flex-row items-center leading-none text-white'}
    >
      <Image src='/expenseLogo.svg' alt="Expense Logo" width={100} height={100} />
      <p className="text-3xl font-extrabold font-serif stroke-text">Expense App</p>
    </div>

  )
}

export default ExpenseLogo
