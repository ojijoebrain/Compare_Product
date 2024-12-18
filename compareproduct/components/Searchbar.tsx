"use client";

import { scrapeAndStoreProduct } from "@/lib/actions";
import { url } from "inspector";
import { FormEvent, useState } from "react";

const isValidJumiaProductURL = (url: string) => {
    try {
        const parsedURL = new URL(url);
        const hostname = parsedURL.hostname;

        if (
            hostname.includes('konga.com') ||
            hostname.includes('konga.') ||
            hostname.endsWith('konga')
        ) {
            return true;
        }
    } catch (error) {
        return false;
    }

}

const Searchbar = () => {
    const [searchPrompt, setSearchPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const isValidLink = isValidJumiaProductURL(searchPrompt);

        if (!isValidLink) return alert('Please provide a valid Jumia link')

        try {
            setIsLoading(true);

            // scrape the product page
            const product = await scrapeAndStoreProduct(searchPrompt);
        } catch (error) {
            console.log(error);

        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form className='flex flex-wrap gap-4 mt-12' onSubmit={handleSubmit}>
            <input
                type="text"
                value={searchPrompt}
                onChange={(e) => setSearchPrompt(e.target.value)}
                placeholder="Enter product link"
                className="searchbar-input"
                required
            />
            <button type="submit"
                className="searchbar-btn"
                disabled={searchPrompt === ''}

            >
                {isLoading ? 'Searching....' : 'Search'}
            </button>
        </form>
    );
};

export default Searchbar;
