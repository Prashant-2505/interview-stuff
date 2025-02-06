#include <bits/stdc++.h>
using namespace std;

class Graph
{
    int V;
    unordered_map<int, list<int>> adjList;

public:
    Graph(int v)
    {
        V = v;
    }

    void insertEdge(int u, int v, bool dir)
    {
        adjList[u].push_back(v);
        if (!dir)
        {
            adjList[v].push_back(u);
        }
    }

    void print()
    {
        for (auto it : adjList)
        {
            cout << it.first << " -> ";
            for (auto i : it.second)
            {
                cout << i << " ";
            }
            cout << endl;
        }
    }

    void dfs(int src, unordered_map<int, bool> &visited)
    {
        visited[src] = true;
        for (auto neighbor : adjList[src])
        {
            if (!visited[neighbor])
            {
                dfs(neighbor, visited);
            }
        }
    }

    bool check_graph_connected()
    {
        unordered_map<int, bool> visited;

        // Find the first node to start DFS
        int startNode = -1;
        for (auto it : adjList)
        {
            startNode = it.first;
            break;
        }

        if (startNode == -1)
            return false; // No edges in the graph

        // Run DFS from the first available node
        dfs(startNode, visited);

        // Check if all nodes in adjList are visited
        for (auto it : adjList)
        {
            if (!visited[it.first])
            {
                return false;
            }
        }
        return true;
    }
};

int main()
{
    int vertex, edges;
    cout << "Enter the number of vertices: ";
    cin >> vertex;
    cout << "Enter the number of edges: ";
    cin >> edges;

    Graph g(vertex);

    for (int i = 0; i < edges; i++)
    {
        int u, v;
        cout << "Enter the edge " << i + 1 << ": ";
        cin >> u >> v;
        g.insertEdge(u, v, true); 
    }

    g.print();

    if (g.check_graph_connected())
    {
        cout << "Graph is connected." << endl;
    }
    else
    {
        cout << "Graph is disconnected." << endl;
    }

    return 0;
}
