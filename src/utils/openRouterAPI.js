export async function getAnswerFromData(userMessage, sampleQA) {
    const match = sampleQA.find(qa =>
      userMessage.toLowerCase().includes(qa.question.toLowerCase())
    );
    return match ? match.answer : "Sorry, I don’t know the answer to that yet.";
  }
  