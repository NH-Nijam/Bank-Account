import './App.css'
import DisplayCards from './components/DisplayCards'
import InputField from './components/InputField'
import Title from './components/Title'
function App() {

  return (
    <div className='space-y-10 w-screen h-screen flex justify-center items-center flex-col'>
      <Title/>
      <div className='grid grid-cols-3 gap-4'>
        <DisplayCards 
        cardTitle='Deposit' 
        amount='0' 
        background ='bg-green-500'/>
        <DisplayCards 
        cardTitle='Withdraw' 
        amount='0' 
        background ='bg-red-500'/>
        <DisplayCards 
        cardTitle='Balance' 
        amount='0' 
        background ='bg-orange-500'/>
      </div>
      
      <div className='grid grid-cols-2 gap-4 '>
        <InputField
        Title='Please Deposit'
        Placeholder='Amount you want to deposit'
        BtnTitle='Deposit'
        background='bg-blue-500'
        />

        <InputField
        Title='Please withdraw'
        Placeholder='Amount you want to Withdraw'
        BtnTitle='Withdraw'
        background='bg-green-500'
        />
      </div>
    </div>
  )
}

export default App
