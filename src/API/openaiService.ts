
const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
const apiUrl = 'https://api.openai.com/v1/chat/completions';



export const generateSQLContent = async (description: string) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    }

    const data = {
      model: 'gpt-4o-mini', // Correct model name
      messages: [
        {
          role: 'system',
          content: 'You are an expert SQL developer. You generate, optimize, and explain SQL queries.',
        },
        {
          role: 'user',
          content: `Write a SQL query for the following task: ${description}. 
                    Also, provide an optimized version of the query, a brute force version, 
                    an explanation of the query, and the order of execution of the query.`,
        },
      ]
    }


    const response = await fetch(apiUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    // Ensure result.choices exists and is not empty
    if (result.choices && result.choices.length > 0) {
      const summaryResult = result.choices[0].message.content;
      return parseSQLResponse(summaryResult);
    } else {
      throw new Error('Invalid response format: No choices found.');
    }

  } catch (error) {
    console.error('Error generating SQL content:', error);
    throw error;
  }
};


const parseSQLResponse = (response: string) => {
  const sections = response.split(/(?:\r?\n){2,}/); // Split by two or more newlines
  return {
    sqlQuery: sections[0] || '',
    optimizedQuery: sections[1] || '',
    bruteForceQuery: sections[2] || '',
    explanation: sections[3] || '',
    executionOrder: sections[4] || '',
  };
};

