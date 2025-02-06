#include <bits/stdc++.h>
using namespace std;

class Graph
{
public:
    int Vertices;
    map<int, list<int>> adjList;

    Graph(int v) // Constructor to initialize vertices
    {
        Vertices = v;
    }

    void insert(int u, int v, bool dir)
    {
        adjList[u].push_back(v);
        if (!dir)
        {
            adjList[v].push_back(u);
        }
    }

    void print()
    {
        for (auto i : adjList)
        {
            cout << i.first << " -> ";
            for (auto j : i.second)
            {
                cout << j << " ";
            }
            cout << endl;
        }
    }

    void bfs(int src)
    {
        queue<int> q;
        map<int, bool> visited;
        q.push(src);
        visited[src] = true;

        while (!q.empty())
        {
            int node = q.front();
            cout << node << " ";
            q.pop();

            for (auto i : adjList[node])
            {
                if (!visited[i])
                {
                    q.push(i);
                    visited[i] = true;
                }
            }
        }
    }

   
};

int main()
{
    int v;
    cout << "Enter the number of vertices: ";
    cin >> v;

    int edges;
    cout << "Enter the number of edges: ";
    cin >> edges;

    Graph g(v); // Create a graph object

    for (int i = 0; i < edges; i++)
    {
        int u, v;
        cout << "Enter the edge (u v): ";
        cin >> u >> v;
        g.insert(u, v, true); // Directed graph
    }

    cout << "\nGraph Representation:\n";
    g.print();

    cout << "\nBFS Traversal:\n";
    g.bfs(1); // Handles disconnected graphs

    return 0;
}
