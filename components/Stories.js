import StoryCard from "./StoryCard"

const stories = [
    {
        name: "Aastik Mandil",
        src: "https://links.papareact.com/5me",
        profile: "https://links.papareact.com/5me",
    }
]

function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map(story => (
                <StoryCard key={story?.src} name={story?.name} src={story?.src} profile={story?.profile} />
            ))}
        </div>
    )
}

export default Stories
