import { useState } from 'react'
import { Menu, X, MessageSquare, HelpCircle, Grid, ThumbsUp } from 'lucide-react'

export default function ForumTemplate() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('conversations')
  const [activeCreatorsTab, setActiveCreatorsTab] = useState('week')

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const posts = [
    { id: 1, author: 'Joanna Dominik', avatar: 'https://img.freepik.com/free-vector/realistic-gold-silver-jewelry-display-black-mannequins-stands-grey-surface_1284-9644.jpg?size=626&ext=jpg&ga=GA1.1.534237988.1704562734&semt=ais_hybrid', title: 'Videoask Widget is overlaid with next Videoask Widget - how to dismiss first?', content: 'I added a Videoask widget to the bottom of my page - the little circular one that pops out from the corner of the page. Then I added one on the next page. And the next...', likes: 1, comments: 2, time: '3 hours ago' },
    { id: 2, author: 'Bimmagedj', avatar: 'https://img.freepik.com/free-vector/realistic-gold-silver-jewelry-display-black-mannequins-stands-grey-surface_1284-9644.jpg?size=626&ext=jpg&ga=GA1.1.534237988.1704562734&semt=ais_hybrid', title: 'Decimals', content: 'I am unable to have decimal number input when I set it up as number input only. Any tips?', likes: 1, comments: 2, time: '5 hours ago' },
    { id: 3, author: 'Marta Marta', avatar: 'https://img.freepik.com/free-vector/realistic-gold-silver-jewelry-display-black-mannequins-stands-grey-surface_1284-9644.jpg?size=626&ext=jpg&ga=GA1.1.534237988.1704562734&semt=ais_hybrid', title: 'How can I refund and cancel a subscription I got just now? It was a mistake and now my bank account is almost empty!', content: 'I tried to register for a pro account (for 1 month) because I would only use Typeform for 1 WEEK. I used Typeform before (2016) and the basic monthly subscription was also...', likes: 7, comments: 6, time: '9 hours ago' },
  ]

  const creators = [
    { id: 1, name: 'john_donborough', avatar: 'https://img.freepik.com/free-vector/realistic-gold-silver-jewelry-display-black-mannequins-stands-grey-surface_1284-9644.jpg?size=626&ext=jpg&ga=GA1.1.534237988.1704562734&semt=ais_hybrid', points: 279 },
    { id: 2, name: 'Ibrahim masafi', avatar: 'https://img.freepik.com/free-vector/realistic-gold-silver-jewelry-display-black-mannequins-stands-grey-surface_1284-9644.jpg?size=626&ext=jpg&ga=GA1.1.534237988.1704562734&semt=ais_hybrid', points: 217 },
    { id: 3, name: 'mark.th', avatar: 'https://img.freepik.com/free-vector/realistic-gold-silver-jewelry-display-black-mannequins-stands-grey-surface_1284-9644.jpg?size=626&ext=jpg&ga=GA1.1.534237988.1704562734&semt=ais_hybrid', points: 98 },
    { id: 4, name: 'marta.th', avatar: 'https://img.freepik.com/free-vector/realistic-gold-silver-jewelry-display-black-mannequins-stands-grey-surface_1284-9644.jpg?size=626&ext=jpg&ga=GA1.1.534237988.1704562734&semt=ais_hybrid', points: 93 },
    { id: 5, name: 'christinadavis', avatar: 'https://img.freepik.com/free-vector/realistic-gold-silver-jewelry-display-black-mannequins-stands-grey-surface_1284-9644.jpg?size=626&ext=jpg&ga=GA1.1.534237988.1704562734&semt=ais_hybrid', points: 88 },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-orange-300 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold">Typeform</h1>
            <nav className="hidden md:flex space-x-4">
              <a href="#" className="text-sm">Activity</a>
              <a href="#" className="text-sm">Library</a>
              <a href="#" className="text-sm">Typeform Q&A</a>
              <a href="#" className="text-sm">Videoask Q&A</a>
            </nav>
          </div>
          <div className="hidden md:flex space-x-2">
            <button className="bg-white text-black px-4 py-2 ">Create a post</button>
            <button className="bg-black text-white px-4 py-2 ">Log in</button>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-orange-200 p-4">
          <nav className="flex flex-col space-y-2">
            <a href="#" className="text-sm">Activity</a>
            <a href="#" className="text-sm">Library</a>
            <a href="#" className="text-sm">Typeform Q&A</a>
            <a href="#" className="text-sm">Videoask Q&A</a>
          </nav>
          <div className="mt-4 space-y-2">
            <button className="w-full bg-white text-black px-4 py-2 rounded">Create a post</button>
            <button className="w-full bg-black text-white px-4 py-2 rounded">Log in</button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="container mx-auto mt-8 px-4">
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Left Column */}
          <div className="md:w-2/3">
            <div className="flex space-x-4 border-b pb-2">
              <button
                className={`flex items-center space-x-1 ${activeTab === 'conversations' ? 'text-blue-600' : 'text-gray-600'}`}
                onClick={() => setActiveTab('conversations')}
              >
                <MessageSquare size={16} />
                <span>Conversations</span>
              </button>
              <button
                className={`flex items-center space-x-1 ${activeTab === 'help-others' ? 'text-blue-600' : 'text-gray-600'}`}
                onClick={() => setActiveTab('help-others')}
              >
                <HelpCircle size={16} />
                <span>Help others</span>
              </button>
              <button
                className={`flex items-center space-x-1 ${activeTab === 'categories' ? 'text-blue-600' : 'text-gray-600'}`}
                onClick={() => setActiveTab('categories')}
              >
                <Grid size={16} />
                <span>Categories</span>
              </button>
            </div>
            <div className="mt-4">
              {activeTab === 'conversations' && (
                <div className="space-y-4">
                  {posts.map((post) => (
                    <div key={post.id} className="bg-white p-4 rounded shadow">
                      <div className="flex items-center space-x-2 mb-2">
                        <img src={post.avatar} alt={post.author} className="w-10 h-10 rounded-full" />
                        <span className="font-semibold">{post.author}</span>
                        <span className="text-sm text-gray-500">{post.time}</span>
                      </div>
                      <h2 className="font-bold">{post.title}</h2>
                      <p className="text-sm text-gray-600 mt-2">{post.content}</p>
                      <div className="flex items-center space-x-4 mt-4">
                        <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
                          <ThumbsUp size={16} />
                          <span>{post.likes}</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
                          <MessageSquare size={16} />
                          <span>{post.comments}</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === 'help-others' && <p>Content for Help others tab</p>}
              {activeTab === 'categories' && <p>Content for Categories tab</p>}
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-1/3 mt-8 md:mt-0">
            <div className="bg-white p-4 rounded shadow mb-4">
              <h2 className="font-bold mb-2">Hey! How's it going?</h2>
              <p className="text-sm text-gray-600">Tell us what's new with you :)</p>
              <button className="mt-4 w-full bg-gray-900 text-white px-4 py-2 ">
                Start a conversation
              </button>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h2 className="font-bold mb-2">Top creators</h2>
              <div className="flex space-x-2 mb-4">
                <button
                  className={`px-4 py-2 text-sm font-medium rounded-full ${
                    activeCreatorsTab === 'week' ? 'bg-gray-200' : 'bg-white'
                  }`}
                  onClick={() => setActiveCreatorsTab('week')}
                >
                  Week
                </button>
                <button
                  className={`px-4 py-2 text-sm font-medium rounded-full ${
                    activeCreatorsTab === 'all-time' ? 'bg-gray-200' : 'bg-white'
                  }`}
                  onClick={() => setActiveCreatorsTab('all-time')}
                >
                  All time
                </button>
              </div>
              {activeCreatorsTab === 'week' && (
                <ol className="space-y-2">
                  {creators.map((creator, index) => (
                    <li key={creator.id} className="flex items-center space-x-2">
                      <span className="font-semibold">{index + 1}</span>
                      <img src={creator.avatar} alt={creator.name} className="w-8 h-8 rounded-full" />
                      <span className="flex-grow">{creator.name}</span>
                      <span className="text-sm text-gray-500">{creator.points} points</span>
                    </li>
                  ))}
                </ol>
              )}
              {activeCreatorsTab === 'all-time' && <p>All time top creators list</p>}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}