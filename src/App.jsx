```javascript
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Task 1: Feedback Form App
const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });
  const [submitted, setSubmitted] = useState(null);

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.feedback) {
      setSubmitted(formData);
      setFormData({ name: '', email: '', feedback: '' });
    }
  };

  return (
    <div className="space-y-4">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Feedback Form</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <Input
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Enter your name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="Enter your email"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Feedback</label>
            <Textarea
              value={formData.feedback}
              onChange={(e) => setFormData({...formData, feedback: e.target.value})}
              placeholder="Enter your feedback"
              rows={4}
            />
          </div>
          
          <Button onClick={handleSubmit} className="w-full">Submit Feedback</Button>
        </div>
      </Card>

      {submitted && (
        <Card className="p-6 bg-green-50">
          <h3 className="text-xl font-semibold mb-3">Submitted Data:</h3>
          <div className="space-y-2">
            <p><strong>Name:</strong> {submitted.name}</p>
            <p><strong>Email:</strong> {submitted.email}</p>
            <p><strong>Feedback:</strong> {submitted.feedback}</p>
          </div>
        </Card>
      )}
    </div>
  );
};

// Task 2: Image Slideshow App
const ImageSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500'
  ];

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Image Slideshow</h2>
      
      <Tabs value={`slide-${currentIndex}`} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="slide-0" onClick={() => setCurrentIndex(0)}>
            Image 1
          </TabsTrigger>
          <TabsTrigger value="slide-1" onClick={() => setCurrentIndex(1)}>
            Image 2
          </TabsTrigger>
          <TabsTrigger value="slide-2" onClick={() => setCurrentIndex(2)}>
            Image 3
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value={`slide-${currentIndex}`} className="mt-4">
          <div className="relative">
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex gap-4 mt-4">
        <Button onClick={goToPrevious} className="flex-1">
          Previous
        </Button>
        <Button onClick={goToNext} className="flex-1">
          Next
        </Button>
      </div>

      <p className="text-center mt-4 text-sm text-gray-600">
        Image {currentIndex + 1} of {images.length}
      </p>
    </Card>
  );
};

// Task 3: Todo List App
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Todo List</h2>
      
      <div className="flex gap-2 mb-4">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Add a new todo"
        />
        <Button onClick={addTodo}>Add</Button>
      </div>

      <div className="space-y-2">
        {todos.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No todos yet. Add one above!</p>
        ) : (
          todos.map(todo => (
            <Card key={todo.id} className="p-4 flex items-center gap-3">
              <Checkbox
                checked={todo.completed}
                onCheckedChange={() => toggleTodo(todo.id)}
              />
              <span className={todo.completed ? 'line-through text-gray-500' : ''}>
                {todo.text}
              </span>
            </Card>
          ))
        )}
      </div>
    </Card>
  );
};

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Masai Assessment</h1>
          <p className="text-gray-600">Integration of External UI Components in React</p>
        </div>

        <FeedbackForm />
        <ImageSlideshow />
        <TodoList />
      </div>
    </div>
  );
}
```
