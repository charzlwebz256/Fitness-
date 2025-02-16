import React, { useState } from 'react';
import { Dumbbell, Utensils, ChevronDown, ChevronUp } from 'lucide-react';

type UserInfo = {
  age: number;
  gender: 'male' | 'female' | 'other';
  goal: 'weight-loss' | 'muscle-gain' | 'maintenance';
  diet: 'omnivore' | 'vegetarian' | 'vegan';
  equipment: 'full-gym' | 'home-basic' | 'bodyweight';
};

type WorkoutDay = {
  day: string;
  exercises: Array<{
    name: string;
    sets: number;
    reps: string;
    rest: string;
  }>;
};

function App() {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    age: 25,
    gender: 'male',
    goal: 'weight-loss',
    diet: 'omnivore',
    equipment: 'full-gym',
  });

  const [showPlan, setShowPlan] = useState(false);
  const [activeWeek, setActiveWeek] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPlan(true);
  };

  const workoutPlan: Record<number, WorkoutDay[]> = {
    1: [
      {
        day: 'Monday',
        exercises: [
          { name: 'Squats', sets: 4, reps: '8-12', rest: '90 sec' },
          { name: 'Bench Press', sets: 4, reps: '8-12', rest: '90 sec' },
          { name: 'Rows', sets: 3, reps: '12-15', rest: '60 sec' },
        ],
      },
      {
        day: 'Wednesday',
        exercises: [
          { name: 'Deadlifts', sets: 4, reps: '6-8', rest: '120 sec' },
          { name: 'Pull-ups', sets: 3, reps: '8-12', rest: '90 sec' },
          { name: 'Shoulder Press', sets: 3, reps: '10-12', rest: '60 sec' },
        ],
      },
      {
        day: 'Friday',
        exercises: [
          { name: 'Lunges', sets: 3, reps: '12-15', rest: '60 sec' },
          { name: 'Push-ups', sets: 3, reps: '12-15', rest: '60 sec' },
          { name: 'Plank', sets: 3, reps: '45 sec', rest: '45 sec' },
        ],
      },
    ],
  };

  const mealPlan = {
    breakfast: 'Oatmeal with berries and protein shake',
    snack1: 'Apple with almonds',
    lunch: 'Grilled chicken salad with quinoa',
    snack2: 'Greek yogurt with honey',
    dinner: 'Salmon with sweet potato and vegetables',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-900 mb-4">Personal Fitness Coach</h1>
          <p className="text-lg text-gray-600">Your customized workout and meal plan generator</p>
        </header>

        {!showPlan ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                <input
                  type="number"
                  value={userInfo.age}
                  onChange={(e) => setUserInfo({ ...userInfo, age: parseInt(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                <select
                  value={userInfo.gender}
                  onChange={(e) => setUserInfo({ ...userInfo, gender: e.target.value as UserInfo['gender'] })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Fitness Goal</label>
                <select
                  value={userInfo.goal}
                  onChange={(e) => setUserInfo({ ...userInfo, goal: e.target.value as UserInfo['goal'] })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="weight-loss">Weight Loss</option>
                  <option value="muscle-gain">Muscle Gain</option>
                  <option value="maintenance">Maintenance</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Dietary Preference</label>
                <select
                  value={userInfo.diet}
                  onChange={(e) => setUserInfo({ ...userInfo, diet: e.target.value as UserInfo['diet'] })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="omnivore">Omnivore</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="vegan">Vegan</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Equipment Access</label>
                <select
                  value={userInfo.equipment}
                  onChange={(e) => setUserInfo({ ...userInfo, equipment: e.target.value as UserInfo['equipment'] })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="full-gym">Full Gym</option>
                  <option value="home-basic">Basic Home Equipment</option>
                  <option value="bodyweight">Bodyweight Only</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Generate Plan
              </button>
            </div>
          </form>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                    <Dumbbell className="w-6 h-6 mr-2" /> Workout Plan
                  </h2>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4].map((week) => (
                      <button
                        key={week}
                        onClick={() => setActiveWeek(week)}
                        className={`px-4 py-2 rounded-md ${
                          activeWeek === week
                            ? 'bg-indigo-600 text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        Week {week}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  {workoutPlan[1].map((day, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h3 className="text-xl font-semibold mb-4">{day.day}</h3>
                      <div className="space-y-3">
                        {day.exercises.map((exercise, idx) => (
                          <div key={idx} className="flex items-center justify-between bg-gray-50 p-3 rounded">
                            <div>
                              <p className="font-medium">{exercise.name}</p>
                              <p className="text-sm text-gray-600">
                                {exercise.sets} sets × {exercise.reps}
                              </p>
                            </div>
                            <p className="text-sm text-gray-500">Rest: {exercise.rest}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Utensils className="w-6 h-6 mr-2" /> Daily Meal Plan
                </h2>
                <div className="space-y-4">
                  {Object.entries(mealPlan).map(([meal, food]) => (
                    <div key={meal} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="font-medium capitalize">{meal.replace(/([A-Z])/g, ' $1').trim()}</div>
                      <div className="text-gray-600">{food}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowPlan(false)}
              className="mt-8 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Create New Plan
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;