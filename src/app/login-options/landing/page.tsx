import React from 'react'
import { LoginHeader } from '../components/loginHeader'
import { LoginInfoBox } from '../components/loginInfo'
import { LoginFooter } from '../components/LoginFooter'

const Page: React.FC = () => {
    return (
        <div>
            <main className="min-h-screen bg-gray-50">
                <LoginHeader />
                {/* <StatusBar /> */}

                <section className="p-6 md:p-12 max-w-4xl mx-auto">
                    <h2 className="text-center text-2xl md:text-4xl font-extrabold mb-10">
                        Would You Like a Receipt?<br />
                        Please Login
                    </h2>

                    {/* <DropBox /> */}

                    <LoginInfoBox />
                </section>
                <LoginFooter />
            </main>
        </div>
    )
}

export default Page
