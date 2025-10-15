import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigateToSignup = () => navigate("/signup");

 const handleLogin = async () => {
  setLoading(true);
  setError("");

  try {
    const res = await axios.post("https://school-management-s6lr.onrender.com/api/login", {
      email,
      password,
    });

    // This block runs only if the response is 2xx
    if (res.data.success) {
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } else {
      setError(res.data.message || "Login failed");
    }
  } catch (err) {
    console.error(err);

    // ✅ Check if server responded
    if (err.response && err.response.data) {
      setError(err.response.data.message || "Login failed");
    } else {
      setError("Server not responding");
    }
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-6xl mx-auto shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          {/* Left side - Image */}
          <div className="lg:w-1/2 hidden lg:block relative">
            <img
              className="w-full h-full object-cover"
              src="https://imgs.search.brave.com/tN6wno47SQgjxHPhOQ4A4J3OL0hjyrKdov5q7s4L9FA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8x/Mi8wMS8wNC80Mi9t/YW4tNzYyODMwNV82/NDAuanBn"
              alt="Login illustration"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Right side - Form */}
          <CardContent className="lg:w-1/2 p-2 lg:p-8 flex flex-col justify-center">
            {/* Toggle Buttons */}
            <div className="flex gap-2 mb-8">
              <Button
                className="flex-1 bg-amber-400 hover:bg-amber-500 text-black font-medium rounded-full h-12"
                size="lg"
              >
                Login
              </Button>
              <Button
                onClick={navigateToSignup}
                variant="secondary"
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full h-12"
                size="lg"
              >
                Register
              </Button>
            </div>

            {/* Welcome Section */}
            <div className="mb-8">
              <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-3">
                Welcome
              </h1>
              <p className="text-gray-600 text-base">Please login to your account</p>
            </div>

            {/* Form Inputs */}
            <div className="space-y-6 mb-8">
              <Input
                type="email"
                placeholder="Email or username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 text-base border-0 border-b-2 border-gray-200 rounded-none bg-transparent focus:border-amber-400 focus:ring-0 px-0"
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 text-base border-0 border-b-2 border-gray-200 rounded-none bg-transparent focus:border-amber-400 focus:ring-0 px-0"
              />
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
            )}

            {/* Forgot Password and Submit */}
            <div className="flex justify-between items-center mb-8">
              <Button variant="link" className="text-gray-600 pl-0 underline">
                Forgot Password?
              </Button>
              <Button onClick={handleLogin} disabled={loading} size="lg">
                {loading ? "Logging in..." : "Login"}
              </Button>
            </div>

            {/* Footer Links */}
            <div className="space-y-4 text-center text-sm text-gray-600">
              <p className="hover:text-gray-900 cursor-pointer">
                Register Your School in Our Apps
              </p>
              <p className="hover:text-gray-900 cursor-pointer">
                Terms and Conditions & Privacy Policy
              </p>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default Login;

