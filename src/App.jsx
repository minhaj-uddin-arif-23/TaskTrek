import { Outlet } from "react-router"


function App() {
  

  return (
   <div>
     <div>
      <aside class="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto  border-r rtl:border-r-0 rtl:border-l text-black dark:border-gray-700">
    <a href="#" class="mx-auto">
        <img class="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="" />
    </a>

    <div class="flex flex-col items-center mt-6 -mx-2">
        <img class="object-cover w-24 h-24 mx-2 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar" />
        <h4 class="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">John Doe</h4>
        <p class="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">john@example.com</p>
    </div>

    <div class="flex flex-col justify-between flex-1 mt-6">
        <nav>
            <a class="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200" href="#">
               

                <span class="mx-4 font-medium">Dashboard</span>
            </a>

            <a class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
               

                <span class="mx-4 font-medium">Accounts</span>
            </a>

            <a class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                

                <span class="mx-4 font-medium">Tickets</span>
            </a>

            <a class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
               

                <span class="mx-4 font-medium">Settings</span>
            </a>
        </nav>
    </div>
</aside>
    </div>
    <div>
      <Outlet />
    </div>
   </div>
  )
}

export default App
