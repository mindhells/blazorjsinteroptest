using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.JSInterop;

namespace BlazorApp1
{
    public class MyHelper
    {
        public MyHelper(string name)
        {
            Name = name;
        }

        public string Name { get; set; }

        [JSInvokable]
        public string SayHello() => $"Hello, {Name}!";
    }
}
