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

    void dfs(int src, vector<bool> &visited)
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

    int num_connected_component()
    {
        vector<bool> visited(V + 1, false);
        // Find the first node to start DFS
        // 1 based graph
        int count = 0;
        for (int i = 1; i <= V; i++)
        {
            if (!visited[i])
            {
                count++;
                dfs(i, visited);
            }
        }
        return count;
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

    cout << g.num_connected_component() << endl;

    return 0;
}
