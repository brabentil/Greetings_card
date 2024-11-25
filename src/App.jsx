import GreetingCard from './GreetingCard.jsx'
import Header from './Header.jsx'

export default function App() {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <div className="grid grid-cols-1 gap-4">
        <GreetingCard title="Happy Birthday!" message="Wishing you a fantastic day filled with joy!" />
        <GreetingCard title="Congratulations!" message="Great job on your achievement!" />
        <GreetingCard title="Thank You!" message="Thanks for your kindness and support!" />
      </div>
    </div>
  )
}
